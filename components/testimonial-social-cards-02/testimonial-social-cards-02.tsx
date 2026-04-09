import { AvatarLabelGroup } from "@org/ui/untitledui/base/avatar/avatar-label-group";
import { VerifiedTick } from "@org/ui/untitledui/base/avatar/base-components";
import { StarIcon } from "@org/ui/untitledui/foundations/rating-stars";
import type { TestimonialSocialCards02Props } from "./types";
import { cn } from "@org/utils";

const fallbackReviews = [
  {
    id: "review-01",
    quote:
      "We've been using Untitled to kick start every new project and can't imagine working without it.",
    stars: 5,
    author: {
      name: "Sienna Hewitt",
      username: "@siennahewitt",
      imageUrl:
        "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80",
      url: "https://example.com/sienna-hewitt",
    },
  },
  {
    id: "review-02",
    quote:
      "From concept to completion, Untitled helps us deliver outstanding designs faster than ever.",
    stars: 5,
    author: {
      name: "Kari Rasmussen",
      username: "@itskari",
      imageUrl:
        "https://www.untitledui.com/images/avatars/kari-rasmussen?fm=webp&q=80",
      url: "https://example.com/itskari",
    },
  },
  {
    id: "review-03",
    quote:
      "Every project starts with Untitled which has 10x'd our output. It saves us time while keeping the quality top-notch.",
    stars: 5,
    author: {
      name: "Amélie Laurent",
      username: "@alaurent_",
      imageUrl:
        "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80",
      url: "https://example.com/alaurent_",
    },
  },
];

export const TestimonialSocialCards02Block = (
  props: TestimonialSocialCards02Props,
) => {
  const reviews = props.reviews || fallbackReviews;
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-16 py-16 lg:py-24",
        props.backgroundColor || "bg-brand-section",
      )}
    >
      <div className="flex max-w-container flex-col items-center gap-4 px-4 text-center lg:gap-5 lg:px-8">
        {props.heading &&
          (() => {
            const HeadingTag = props.headingLevel || "h1";
            return (
              <HeadingTag className="text-display-md font-semibold text-primary_on-brand md:text-display-lg lg:text-display-xl">
                {props.heading}
              </HeadingTag>
            );
          })()}
        {props.supportingText && (
          <p className="text-lg text-tertiary_on-brand lg:text-xl">
            {props.supportingText}
          </p>
        )}
      </div>
      <div className="grid max-w-container grid-cols-1 gap-5 px-4 lg:grid-cols-3 lg:gap-6 lg:px-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col items-start gap-8 rounded-xl p-6 lg:justify-between lg:p-8",
              props.cards?.backgroundColor || "bg-brand-section_subtle",
            )}
          >
            <div className="flex flex-col items-start gap-4">
              {review.stars && (
                <div aria-hidden="true" className="flex gap-1">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              )}
              {review.quote && (
                <blockquote className="text-md font-medium text-primary_on-brand">
                  {review.quote}
                </blockquote>
              )}
            </div>
            {review.author && (
              <a
                href={review.author.url || "#"}
                className="group flex outline-hidden"
              >
                <AvatarLabelGroup
                  border
                  size="lg"
                  src={review.author.imageUrl}
                  alt={review.author.name}
                  avatarClassName="bg-primary"
                  title={
                    <span className="relative flex items-center gap-1 text-primary_on-brand">
                      {review.author.name}
                      <VerifiedTick size="lg" />
                    </span>
                  }
                  subtitle={
                    <span className="text-tertiary_on-brand underline decoration-1 underline-offset-4">
                      {review.author.username}
                    </span>
                  }
                />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
