import { type SocialProofFullWidthMaskedProps } from "./types";
import { cn } from "@org/utils";

const fallbackLogos = [
    {
        name: "Odeaolabs",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/odeao-labs.svg",
    },
    {
        name: "Kintsugi",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/kintsugi.svg",
    },
    {
        name: "Stackedlab",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/stacked-lab.svg",
    },
    {
        name: "Magnolia",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/magnolia.svg",
    },
    {
        name: "Powersurge",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/powersurge.svg",
    },
    {
        name: "Warpspeed",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/warpspeed.svg",
    },
    {
        name: "Leapyear",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/leapyear.svg",
    },
    {
        name: "Easytax",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/easy-tax.svg",
    },
    {
        name: "Sisyphus",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/sisyphus.svg",
    },
    {
        name: "Catalog",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/catalog.svg",
    },
];

export const SocialProofFullWidthMaskedBlock = (
  props: SocialProofFullWidthMaskedProps,
) => {
  const logos = props.logos && props.logos.length > 0 ? props.logos : fallbackLogos;
  return (
    <section
      className={cn(
        "overflow-hidden py-16 md:py-24",
        props.backgroundColor || "bg-primary",
      )}
    >
      <div className="mx-auto max-w-container px-4 md:px-8">
        <div className="flex flex-col gap-8">
          {props.text && (
            <p className="text-center text-md font-medium text-tertiary">
              {props.text}
            </p>
          )}
          <div className="flex max-w-full flex-col items-center gap-y-4 mask-x-from-80%">
            {/* Top layer of logos (visible on all viewports) */}
            {logos && (
              <div className="flex">
                <div className="flex w-auto max-w-none shrink-0 animate-marquee justify-center gap-5 pl-5 motion-reduce:animate-none md:gap-6 md:pl-6">
                  {/* Light mode images (hidden in dark mode) */}
                  {logos.map((logo) => (
                    <img
                      key={logo.name}
                      alt={logo.name}
                      src={logo.imageUrl}
                      className="h-8 opacity-85 md:h-10"
                    />
                  ))}
                </div>

                <div className="flex w-auto max-w-none shrink-0 animate-marquee justify-center gap-5 pl-5 motion-reduce:animate-none md:gap-6 md:pl-6">
                  {/* Light mode images (hidden in dark mode) */}
                  {logos.map((logo) => (
                    <img
                      key={logo.name}
                      alt={logo.name}
                      src={logo.imageUrl}
                      className="h-8 opacity-85 md:h-10"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Bottom layer of logos (visible on mobile only) */}
            {logos && (
              <div className="flex md:hidden">
                <div className="flex w-auto max-w-none shrink-0 animate-marquee justify-center gap-5 pl-5 delay-[-3s] direction-reverse motion-reduce:-translate-x-1/2 motion-reduce:animate-none md:gap-6 md:pl-6">
                  {/* Light mode images (hidden in dark mode) */}
                  {logos.map((logo) => (
                    <img
                      key={logo.name}
                      alt={logo.name}
                      src={logo.imageUrl}
                      className="h-8 opacity-85 md:h-10"
                    />
                  ))}
                </div>

                <div className="flex w-auto max-w-none shrink-0 animate-marquee justify-center gap-5 pl-5 delay-[-3s] direction-reverse motion-reduce:-translate-x-1/2 motion-reduce:animate-none md:gap-6 md:pl-6">
                  {/* Light mode images (hidden in dark mode) */}
                  {logos.map((logo) => (
                    <img
                      key={logo.name}
                      alt={logo.name}
                      src={logo.imageUrl}
                      className="h-8 opacity-85 md:h-10"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
