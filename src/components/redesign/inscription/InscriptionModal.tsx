import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, ArrowRight, CheckCircle2, Loader2, AlertCircle, Trophy, Zap, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../ui/dialog';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Checkbox } from '../../ui/checkbox';
import {
  inscriptionSchema,
  type InscriptionFormData,
  formFields,
  modalContent,
  submitInscription,
  defaultValues,
} from '../../../data/redesign/inscription';

// ===========================
// TYPES
// ===========================

interface InscriptionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

// ===========================
// SUB-COMPONENTS
// ===========================

// Input Field with inline validation
function FormField({
  name,
  label,
  type = 'text',
  placeholder,
  required,
  helper,
  autoComplete,
  maxLength,
  register,
  error,
  isValid,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  helper?: string;
  autoComplete?: string;
  maxLength?: number;
  register: any;
  error?: string;
  isValid?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-gray-300">
        {label} {required && <span className="text-[#ff00ff]">*</span>}
      </Label>
      <div className="relative">
        <Input
          id={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          maxLength={maxLength}
          className={`
            bg-[#0a0a1f]/60 border-2 transition-all
            text-white placeholder:text-gray-500
            focus:ring-0 focus:ring-offset-0
            ${error 
              ? 'border-red-500/50 focus:border-red-500' 
              : isValid
              ? 'border-green-500/50 focus:border-green-500'
              : 'border-cyan-500/30 focus:border-[#ff00ff]'
            }
            ${isValid || error ? 'pr-10' : ''}
          `}
          {...register}
        />
        {/* Validation icon */}
        {isValid && !error && (
          <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
        )}
        {error && (
          <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
        )}
      </div>
      {/* Helper or Error message */}
      {error ? (
        <p className="text-xs text-red-400 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      ) : helper ? (
        <p className="text-xs text-gray-500">{helper}</p>
      ) : null}
    </div>
  );
}

// Checkbox Field with inline validation
function CheckboxField({
  name,
  label,
  required,
  helper,
  links,
  checked,
  onCheckedChange,
  error,
}: {
  name: string;
  label: string;
  required?: boolean;
  helper?: string;
  links?: { text: string; href: string }[];
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <Checkbox
          id={name}
          checked={checked}
          onCheckedChange={onCheckedChange}
          className={`mt-0.5 border-2 transition-colors ${
            error
              ? 'border-red-500/50 data-[state=checked]:bg-red-500'
              : 'border-cyan-500/50 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#00f3ff] data-[state=checked]:to-[#ff00ff]'
          }`}
        />
        <div className="flex-1 space-y-1">
          <Label
            htmlFor={name}
            className={`text-sm leading-relaxed cursor-pointer ${
              error ? 'text-red-400' : 'text-gray-300'
            }`}
          >
            {label} {required && <span className="text-[#ff00ff]">*</span>}
          </Label>
          
          {/* Links (for CGU) */}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-1">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-400 hover:text-[#ff00ff] transition-colors flex items-center gap-1 underline"
                >
                  {link.text}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          )}
          
          {/* Helper text */}
          {helper && (
            <p className="text-xs text-gray-500">{helper}</p>
          )}
        </div>
      </div>
      
      {/* Error message */}
      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1 ml-7">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  );
}

// Success Screen Component
function SuccessScreen({ onClose, onViewTournament }: { onClose: () => void; onViewTournament: () => void }) {
  return (
    <div className="text-center py-8 space-y-8 animate-in fade-in duration-500">
      {/* Icon */}
      <div className="relative w-24 h-24 mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full opacity-50 blur-2xl animate-pulse" />
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#00f3ff] to-[#ff00ff] flex items-center justify-center text-5xl">
          {modalContent.success.icon}
        </div>
      </div>

      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl">
          <span className="bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] bg-clip-text text-transparent">
            {modalContent.success.title}
          </span>
        </h2>
        <p className="text-lg text-cyan-400">{modalContent.success.subtitle}</p>
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          {modalContent.success.message}
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-4">
        {modalContent.success.stats.map((stat, idx) => (
          <div
            key={idx}
            className="px-4 py-2 rounded-lg bg-[#0a0a1f]/60 border border-cyan-500/30 backdrop-blur-md"
          >
            <span className="text-sm">
              {stat.emoji} <span className="text-gray-300">{stat.text}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Next Steps */}
      <div className="text-left max-w-md mx-auto space-y-4 p-6 rounded-xl bg-[#0a0a1f]/40 border border-purple-500/30">
        <h3 className="text-lg text-purple-400 flex items-center gap-2">
          <Zap className="w-5 h-5" />
          {modalContent.success.nextSteps.title}
        </h3>
        <ul className="space-y-2">
          {modalContent.success.nextSteps.steps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          size="lg"
          onClick={onViewTournament}
          className="bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90 text-white border-0 shadow-lg shadow-purple-500/40"
        >
          {modalContent.success.actions.primary}
          <Trophy className="ml-2 w-5 h-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={onClose}
          className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500"
        >
          {modalContent.success.actions.secondary}
        </Button>
      </div>
    </div>
  );
}

// Error Screen Component
function ErrorScreen({ onRetry, message }: { onRetry: () => void; message?: string }) {
  return (
    <div className="text-center py-8 space-y-6">
      <div className="w-20 h-20 mx-auto rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center">
        <AlertCircle className="w-10 h-10 text-red-500" />
      </div>
      
      <div className="space-y-2">
        <h2 className="text-2xl text-red-400">{modalContent.error.title}</h2>
        <p className="text-gray-400">{message || modalContent.error.message}</p>
      </div>
      
      <Button
        onClick={onRetry}
        className="bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90 text-white border-0"
      >
        {modalContent.error.action}
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
}

// ===========================
// MAIN COMPONENT
// ===========================

export default function InscriptionModal({ open, onOpenChange }: InscriptionModalProps) {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, touchedFields },
    reset,
  } = useForm<InscriptionFormData>({
    resolver: zodResolver(inscriptionSchema),
    defaultValues,
    mode: 'onChange', // Validation on change for inline feedback
  });

  // Watch values for inline validation feedback
  const watchedValues = watch();

  // Check if field is valid (touched + no error)
  const isFieldValid = (fieldName: keyof InscriptionFormData) => {
    return touchedFields[fieldName] && !errors[fieldName] && watchedValues[fieldName];
  };

  // Submit handler
  const onSubmit = async (data: InscriptionFormData) => {
    setFormState('loading');
    setErrorMessage('');

    try {
      const result = await submitInscription(data);
      
      if (result.success) {
        setFormState('success');
      } else {
        setFormState('error');
        setErrorMessage(result.message || '');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('Une erreur inattendue est survenue');
    }
  };

  // Reset form and close
  const handleClose = () => {
    reset();
    setFormState('idle');
    setErrorMessage('');
    onOpenChange(false);
  };

  // Retry after error
  const handleRetry = () => {
    setFormState('idle');
    setErrorMessage('');
  };

  // Navigate to tournament page
  const handleViewTournament = () => {
    handleClose();
    // Navigate to tournament page
    window.location.href = '/tournament';
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md bg-[#0a0a1f]/95 border-2 border-cyan-500/30 backdrop-blur-xl text-white p-0 gap-0 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <DialogHeader className="relative p-6 pb-4 border-b border-cyan-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10" />
          <div className="relative space-y-2">
            <DialogTitle className="text-2xl md:text-3xl text-center">
              <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                {modalContent.title}
              </span>
            </DialogTitle>
            <p className="text-sm text-gray-400 text-center">{modalContent.subtitle}</p>
          </div>
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </DialogHeader>

        {/* Content */}
        <div className="p-6">
          {formState === 'success' ? (
            <SuccessScreen onClose={handleClose} onViewTournament={handleViewTournament} />
          ) : formState === 'error' ? (
            <ErrorScreen onRetry={handleRetry} message={errorMessage} />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Prénom */}
              <FormField
                {...formFields.prenom}
                register={register('prenom')}
                error={errors.prenom?.message}
                isValid={isFieldValid('prenom')}
              />

              {/* Nom */}
              <FormField
                {...formFields.nom}
                register={register('nom')}
                error={errors.nom?.message}
                isValid={isFieldValid('nom')}
              />

              {/* Email */}
              <FormField
                {...formFields.email}
                register={register('email')}
                error={errors.email?.message}
                isValid={isFieldValid('email')}
              />

              {/* Divider */}
              <div className="border-t border-cyan-500/20 pt-5" />

              {/* Age Confirmation */}
              <CheckboxField
                {...formFields.ageConfirm}
                checked={watchedValues.ageConfirm || false}
                onCheckedChange={(checked) => setValue('ageConfirm', checked, { shouldValidate: true })}
                error={errors.ageConfirm?.message}
              />

              {/* CGU Acceptance */}
              <CheckboxField
                {...formFields.cguAccept}
                checked={watchedValues.cguAccept || false}
                onCheckedChange={(checked) => setValue('cguAccept', checked, { shouldValidate: true })}
                error={errors.cguAccept?.message}
              />

              {/* Newsletter (optional) */}
              <CheckboxField
                {...formFields.newsletter}
                checked={watchedValues.newsletter || false}
                onCheckedChange={(checked) => setValue('newsletter', checked)}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={formState === 'loading'}
                className="w-full bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90 text-white border-0 shadow-lg shadow-purple-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    {modalContent.cta.loading}
                  </>
                ) : (
                  <>
                    {modalContent.cta.default}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              {/* Privacy note */}
              <p className="text-xs text-center text-gray-500">
                Vos données sont protégées et ne seront jamais partagées. Vous pouvez les modifier ou supprimer à tout moment.
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
