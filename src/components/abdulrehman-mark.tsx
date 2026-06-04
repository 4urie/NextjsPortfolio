export function AbdulRehmanMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 280 100"
      {...props}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Minecraftia&display=swap');
      `}</style>
      <text
        x="50%"
        y="50%"
        fill="currentColor"
        dominantBaseline="middle"
        textAnchor="middle"
        style={{
          fontSize: 64,
          letterSpacing: "2px",
          fontFamily: "'Minecraftia', cursive",
          fontWeight: 400,
        }}
      >
        4urie
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 280 100"><style>@import url('https://fonts.googleapis.com/css2?family=Minecraftia&display=swap');</style><text x="50%" y="50%" fill="${color}" dominant-baseline="middle" text-anchor="middle" font-family="'Minecraftia', cursive" font-size="64" letter-spacing="2px">4urie</text></svg>`;
}
