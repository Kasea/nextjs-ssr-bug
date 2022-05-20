import React from "react";

const RenderData = () => {
  return (
    <button>
        <div>
            <button>I break nextjs</button>
        </div>
    </button>
  );
};

export default function Main() {
  return (
    <div>
      <RenderData />
      <RenderData />

      <div>very broken</div>
    </div>
  );
}
