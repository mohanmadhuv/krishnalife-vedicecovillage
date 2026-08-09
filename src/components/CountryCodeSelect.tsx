"use client";

import { useMemo, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import type { Country } from "react-phone-number-input";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { MdOutlineKeyboardArrowDown, MdOutlineSearch } from "react-icons/md";
import countryNames from "react-phone-number-input/locale/en.json";

interface CountryOption {
  country: Country;
  name: string;
  flag: string;
  callingCode: string;
}

const COUNTRY_OPTIONS: CountryOption[] = getCountries()
  .map((country) => ({
    country,
    name: countryNames[country] ?? country,
    flag: getUnicodeFlagIcon(country),
    callingCode: getCountryCallingCode(country),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function CountryCodeSelect({
  value,
  onChange,
}: {
  value: Country;
  onChange: (country: Country) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const selected =
    COUNTRY_OPTIONS.find((option) => option.country === value) ??
    COUNTRY_OPTIONS[0];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRY_OPTIONS;
    return COUNTRY_OPTIONS.filter(
      (option) =>
        option.name.toLowerCase().includes(q) ||
        option.country.toLowerCase().includes(q) ||
        option.callingCode.includes(q),
    );
  }, [query]);

  return (
    <Popover.Root
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) setQuery("");
      }}
    >
      <Popover.Trigger asChild>
        <button
          type="button"
          aria-label="Select country code"
          className="absolute inset-y-0 left-2 flex items-center gap-1 rounded-lg px-2 text-[16px] leading-none text-ink transition-colors hover:bg-neutral-100"
        >
          <span aria-hidden className="leading-none">
            {selected.flag}
          </span>
          <span className="leading-none">+{selected.callingCode}</span>
          <MdOutlineKeyboardArrowDown className="h-5 w-5 text-neutral-400" />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={8}
          className="z-40 flex w-72 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg"
        >
          <div className="relative border-b border-neutral-200 p-2">
            <MdOutlineSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search country or code"
              className="w-full rounded-lg py-2 pl-11 pr-2 text-[16px] text-ink placeholder:text-neutral-400 focus:outline-none"
            />
          </div>

          <div className="max-h-64 overflow-y-auto p-1">
            {results.length === 0 ? (
              <p className="p2 px-3 py-4 text-center">No matches</p>
            ) : (
              results.map((option) => (
                <button
                  key={option.country}
                  type="button"
                  onClick={() => {
                    onChange(option.country);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[16px] transition-colors hover:bg-neutral-50 ${
                    option.country === selected.country
                      ? "bg-neutral-100"
                      : ""
                  }`}
                >
                  <span aria-hidden>{option.flag}</span>
                  <span className="flex-1 truncate text-ink">
                    {option.name}
                  </span>
                  <span className="text-neutral-400">
                    +{option.callingCode}
                  </span>
                </button>
              ))
            )}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
