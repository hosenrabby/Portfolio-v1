'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import ButtonSec from '@/components/ButtonSec';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">WEB</span> <span className="ml-2">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Hosen Rabby
                        </span>
                        . As Professional Web Developer with over 1+ years of experience crafting scalable, high-performance, and responsive web solutions that deliver exceptional user experiences.
                    </p>
                    <div className='flex gap-3'>
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="#"
                            variant="primary"
                            className="mt-9 banner-button slide-up-and-fade"
                        >
                            Reach Out Me
                        </Button>
                        <ButtonSec
                            text="MY RESUME"
                            icon={<GoArrowUpRight />}
                            href="#"
                            className="mt-9 banner-button slide-up-and-fade" />
                    </div>
                </div>
                {/* <div>
                    <img src="" alt="" />
                </div> */}
                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            1+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            5+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            50+
                        </h5>
                        <p className="text-muted-foreground">Satisfied client</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
