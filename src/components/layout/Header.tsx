import React from "react";

const Header: React.FC = () => {
  return (
    <header className="shadow-[0_0_14px_rgba(198,191,191,0.25)] flex items-center justify-between bg-white px-[275px] py-[21px] max-md:px-8 max-md:py-[21px]">
      <div className="w-11 h-[45px]">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;2:110&quot; layer-name=&quot;cmwlogo (1) 1&quot; width=&quot;44&quot; height=&quot;46&quot; viewBox=&quot;0 0 44 46&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;logo-svg&quot;> <g clip-path=&quot;url(#clip0_2_110)&quot;> <mask id=&quot;mask0_2_110&quot; style=&quot;mask-type:luminance&quot; maskUnits=&quot;userSpaceOnUse&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;44&quot; height=&quot;46&quot;> <path d=&quot;M44 0.661621H0V45.3385H44V0.661621Z&quot; fill=&quot;white&quot;></path> </mask> <g mask=&quot;url(#mask0_2_110)&quot;> <path d=&quot;M26.3299 5.41968L26.8852 23.3961L41.6352 13.9324L26.3299 5.41968Z&quot; fill=&quot;#333333&quot;></path> <path d=&quot;M41.5308 32.7551V13.8619L20.395 27.4678V45.3387H21.1064&quot; fill=&quot;#494949&quot;></path> <path d=&quot;M3.18875 32.0419L16.7153 23.3629L17.2244 39.8485L3.18875 32.0419Z&quot; fill=&quot;url(#paint0_linear_2_110)&quot;></path> <path d=&quot;M3.18875 32.0419L16.7153 23.3629L17.2244 39.8485L3.18875 32.0419Z&quot; fill=&quot;url(#paint1_linear_2_110)&quot;></path> <path d=&quot;M3.18875 32.0419L16.7153 23.3629L17.2244 39.8485L3.18875 32.0419Z&quot; stroke=&quot;url(#paint2_linear_2_110)&quot; stroke-width=&quot;0.846154&quot;></path> <path d=&quot;M3.18875 32.0419L16.7153 23.3629L17.2244 39.8485L3.18875 32.0419Z&quot; stroke=&quot;url(#paint3_linear_2_110)&quot; stroke-width=&quot;0.846154&quot;></path> <path d=&quot;M2.46906 13.2451V32.1381L23.6051 18.5501V0.661621H22.8936&quot; fill=&quot;url(#paint4_linear_2_110)&quot;></path> <path d=&quot;M2.46906 13.2451V32.1381L23.6051 18.5501V0.661621H22.8936&quot; fill=&quot;url(#paint5_linear_2_110)&quot;></path> </g> </g> <defs> <linearGradient id=&quot;paint0_linear_2_110&quot; x1=&quot;2.36493&quot; y1=&quot;31.5921&quot; x2=&quot;17.6703&quot; y2=&quot;31.5921&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;#00AAFF&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;#8636F8&quot;></stop> </linearGradient> <linearGradient id=&quot;paint1_linear_2_110&quot; x1=&quot;10.0176&quot; y1=&quot;40.5806&quot; x2=&quot;10.0176&quot; y2=&quot;22.6037&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;white&quot; stop-opacity=&quot;0.6&quot;></stop> <stop offset=&quot;0.1085&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0.455&quot;></stop> <stop offset=&quot;0.4332&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0.216&quot;></stop> <stop offset=&quot;0.6639&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0.06&quot;></stop> <stop offset=&quot;0.775&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0&quot;></stop> </linearGradient> <linearGradient id=&quot;paint2_linear_2_110&quot; x1=&quot;2.36493&quot; y1=&quot;31.5921&quot; x2=&quot;17.6703&quot; y2=&quot;31.5921&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;#00AAFF&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;#8636F8&quot;></stop> </linearGradient> <linearGradient id=&quot;paint3_linear_2_110&quot; x1=&quot;10.0176&quot; y1=&quot;40.5806&quot; x2=&quot;10.0176&quot; y2=&quot;22.6037&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;white&quot; stop-opacity=&quot;0.6&quot;></stop> <stop offset=&quot;0.1085&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0.455&quot;></stop> <stop offset=&quot;0.4332&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0.216&quot;></stop> <stop offset=&quot;0.6639&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0.06&quot;></stop> <stop offset=&quot;0.775&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0&quot;></stop> </linearGradient> <linearGradient id=&quot;paint4_linear_2_110&quot; x1=&quot;1.5926&quot; y1=&quot;20.0785&quot; x2=&quot;24.8932&quot; y2=&quot;18.3851&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop offset=&quot;0.0226&quot; stop-color=&quot;#8636F8&quot;></stop> <stop offset=&quot;0.3484&quot; stop-color=&quot;#F020B3&quot;></stop> <stop offset=&quot;0.6742&quot; stop-color=&quot;#F8475E&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;#FF9421&quot;></stop> </linearGradient> <linearGradient id=&quot;paint5_linear_2_110&quot; x1=&quot;13.0371&quot; y1=&quot;32.1381&quot; x2=&quot;13.0371&quot; y2=&quot;0.661621&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;white&quot; stop-opacity=&quot;0.6&quot;></stop> <stop offset=&quot;0.0842&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0.455&quot;></stop> <stop offset=&quot;0.367&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0.216&quot;></stop> <stop offset=&quot;0.568&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0.06&quot;></stop> <stop offset=&quot;0.6648&quot; stop-color=&quot;white&quot; stop-opacity=&quot;0&quot;></stop> </linearGradient> <clipPath id=&quot;clip0_2_110&quot;> <rect width=&quot;44&quot; height=&quot;44.6769&quot; fill=&quot;white&quot; transform=&quot;translate(0 0.661621)&quot;></rect> </clipPath> </defs> </svg>",
            }}
          />
        </div>
      </div>
      <nav className="flex items-center gap-6 max-sm:hidden">
        <a
          href="#"
          className="text-[#303030] text-base font-bold cursor-pointer"
        >
          Home
        </a>
        <a
          href="#"
          className="text-[#303030] text-base font-bold cursor-pointer"
        >
          Find Jobs
        </a>
        <a
          href="#"
          className="text-[#303030] text-base font-bold cursor-pointer"
        >
          Find Talents
        </a>
        <a
          href="#"
          className="text-[#303030] text-base font-bold cursor-pointer"
        >
          About us
        </a>
        <a
          href="#"
          className="text-[#303030] text-base font-bold cursor-pointer"
        >
          Testimonials
        </a>
        <button className="text-white text-base font-bold cursor-pointer bg-[#8636F8] px-6 py-2 rounded-[10px]">
          Create Jobs
        </button>
      </nav>
    </header>
  );
};

export default Header;
