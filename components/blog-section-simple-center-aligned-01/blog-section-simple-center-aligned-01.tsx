"use client"
import { Button } from "@org/ui/untitledui/base/buttons/button";
import { Simple03Vertical } from "./blog-cards";
import type { BlogSectionSimpleCenterAligned01Props } from "./types";

export const BlogSectionSimpleCenterAligned01Block = (props: BlogSectionSimpleCenterAligned01Props) => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    {props.subheading && (() => {
                        const SubheadingTag = props.subheadingLevel || "p";
                        return (
                            <SubheadingTag className="text-sm font-semibold text-brand-secondary md:text-md">
                                {props.subheading}
                            </SubheadingTag>
                        );
                    })()}

                    {props.heading && (() => {
                        const HeadingTag = props.headingLevel || "h2";
                        return (
                            <HeadingTag className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                                {props.heading}
                            </HeadingTag>
                        );
                    })()}
                    {props.supportingText && (
                    <div className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">{props.supportingText}</div>
                    )}
                </div>

                {props.articles && (
                    <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {props.articles.slice(0, 3).map((article) => (
                            <li key={article.id}>
                                <Simple03Vertical article={article} />
                            </li>
                        ))}
                    </ul>
                )}

                {props.actions && (
                    <div className="mt-12 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                        {props.actions.map((button, index) => (
                            <Button key={index} {...button} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
