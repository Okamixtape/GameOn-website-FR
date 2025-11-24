/**
 * GridBackground - Grille cyberpunk fixe
 * 
 * Présent sur toutes les pages du redesign
 * Pattern de grille néon cyan en arrière-plan
 */

export function GridBackground() {
  return (
    <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(#00f3ff 1px, transparent 1px), linear-gradient(90deg, #00f3ff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: 0.1,
        }}
      />
    </div>
  );
}
