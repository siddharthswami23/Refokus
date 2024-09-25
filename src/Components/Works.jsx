import { useScroll } from "framer-motion";
import { useState } from "react";

function Works() {
  const [images, setimages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "53%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "47%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "52%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "53%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "55%",
      left: "52%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  function showimage(arr) {
    setimages((prev) =>
      prev.map((item, index) =>
        arr.indexOf(index) === -1
          ? { ...item, isActive: false}
          : { ...item, isActive: true }
      )
    );
  }

  scrollYProgress.on("change", (data) => {
    let val = Math.floor(data * 100);

    switch (val) {
      case 0:
        showimage([]);
        break;
      case 1:
        showimage([0]);
        break;
      case 2:
        showimage([0, 1]);
        break;
      case 3:
        showimage([0, 1, 2]);
        break;
      case 5:
        showimage([0, 1, 2,3]);
        break;
      case 8:
        showimage([0, 1, 2,3,4]);
        break;
    }
  });

  return (
    <div>
      <div className="relative max-w-screen-xl mx-auto">
        <h1 className="lowercase font-regular tracking-tight leading-none text-[30vw] text-center">
          works
        </h1>
      </div>
      <div className="absolute top-0 w-full h-full">
        {images.map(
          (item, index) =>
            item.isActive && (
              <img
                key={index}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-lg"
                src={item.url}
                style={{
                  top: item.top,
                  left: item.left,
                }}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
}

export default Works;
