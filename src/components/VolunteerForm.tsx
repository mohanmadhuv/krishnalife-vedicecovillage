"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import type { Country } from "react-phone-number-input";
import { MdOutlineArrowForward } from "react-icons/md";
import CountryCodeSelect from "./CountryCodeSelect";

const INPUT_CLASS =
  "mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-[16px] text-ink placeholder:text-neutral-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export default function VolunteerForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [countryCode, setCountryCode] = useState<Country>("US");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-8 pb-section sm:px-16">
      <h2 className="max-w-2xl text-ink">
        We&apos;re officially open for volunteers!
      </h2>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="p2 max-w-lg">
          Share a few details and we&apos;ll reach out with ways to get
          involved on the farm.
        </p>

        <a href="#visit" className="link shrink-0 whitespace-nowrap">
          A day at the village
          <MdOutlineArrowForward className="h-4 w-4" aria-hidden />
        </a>
      </div>

      <div className="relative isolate mt-14 grid gap-10 overflow-hidden rounded-2xl border border-neutral-200 p-8 sm:mt-16 sm:grid-cols-2 sm:gap-16 sm:p-14">
        <Image
          src="/images/volunteer-form-bg.png"
          alt=""
          fill
          className="-z-10 object-cover -scale-x-100"
          sizes="(min-width: 1280px) 1152px, 100vw"
        />

        {/* Reserved for a looping animation */}
        <div className="aspect-square w-full" aria-hidden />

        {status === "success" ? (
          <div className="flex flex-col justify-center rounded-xl border border-white/60 bg-white/90 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="text-ink">Thank you!</h3>
            <p className="p2 mt-2">
              We&apos;ve received your details and will be in touch soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-xl border border-white/60 bg-white/90 p-6 backdrop-blur-sm sm:p-8"
          >
            <div>
              <label htmlFor="volunteer-name" className="text-ink font-medium">
                Full Name
              </label>
              <input
                id="volunteer-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Enter your full name"
                className={INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor="volunteer-email" className="text-ink font-medium">
                Email Address
              </label>
              <input
                id="volunteer-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email"
                className={INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor="volunteer-phone" className="text-ink font-medium">
                Phone Number
              </label>
              <div className="relative mt-2">
                <CountryCodeSelect
                  value={countryCode}
                  onChange={setCountryCode}
                />
                <input type="hidden" name="phoneCountry" value={countryCode} />
                <input
                  id="volunteer-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  className={`${INPUT_CLASS} mt-0 pl-24`}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="volunteer-instagram"
                className="text-ink font-medium"
              >
                Instagram Handle
              </label>
              <div className="relative mt-2">
                <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[16px] text-neutral-400">
                  @
                </span>
                <input
                  id="volunteer-instagram"
                  name="instagram"
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="yourusername"
                  className={`${INPUT_CLASS} mt-0 pl-8`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="p1 mt-2 inline-flex w-fit items-center justify-center rounded-full border border-[#D76F00] bg-gradient-to-b from-[#FFB45D] to-[#FF8513] px-4.5 py-1.5 font-medium text-white transition-[filter,transform] duration-150 active:scale-[0.97] disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : "Sign me up"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
