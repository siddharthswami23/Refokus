import Marquee from "./Marquee";
function Marquees() {
  const images = [
    [
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576760319d7680c72bdc3_yahoo-white.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676418e44be467584c5_mint%20w.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576760319d7680c72bdc3_yahoo-white.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676418e44be467584c5_mint%20w.svg",
    ],
    [
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576760319d7680c72bdc3_yahoo-white.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676418e44be467584c5_mint%20w.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576760319d7680c72bdc3_yahoo-white.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676418e44be467584c5_mint%20w.svg",
    ],
  ];
  return (
    <div className="py-10 overflow-hidden">
      {images.map((item,index)=>(
        <Marquee key={index} imageurls={item} direction={index === 0 ? "left":"right"}/>
      ))}
    </div>
  );
}

export default Marquees;
