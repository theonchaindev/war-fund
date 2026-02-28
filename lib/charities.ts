export interface Charity {
  name: string;
  shortName: string;
  description: string;
  website: string;
  focus: string;
  acceptsCrypto: boolean;
  logo: string;
  raised: number;
}

export const charities: Charity[] = [
  {
    name: "International Committee of the Red Cross",
    shortName: "ICRC",
    description:
      "Protects victims of armed conflict and provides emergency aid, medical care, and essential supplies in war zones worldwide.",
    website: "https://www.icrc.org",
    focus: "Emergency Relief",
    acceptsCrypto: true,
    logo: "https://logo.clearbit.com/icrc.org",
    raised: 12450,
  },
  {
    name: "Doctors Without Borders",
    shortName: "MSF",
    description:
      "Independent medical humanitarian organization delivering emergency medical aid where it's needed most — conflict zones, epidemics, and disasters.",
    website: "https://www.msf.org",
    focus: "Medical Aid",
    acceptsCrypto: true,
    logo: "https://logo.clearbit.com/msf.org",
    raised: 9800,
  },
  {
    name: "UN Refugee Agency",
    shortName: "UNHCR",
    description:
      "Protects and assists refugees and displaced people fleeing conflict, providing shelter, food, water, and legal aid.",
    website: "https://www.unhcr.org",
    focus: "Refugee Support",
    acceptsCrypto: true,
    logo: "https://logo.clearbit.com/unhcr.org",
    raised: 11200,
  },
  {
    name: "UNICEF",
    shortName: "UNICEF",
    description:
      "Provides humanitarian aid to children in conflict zones including healthcare, nutrition, clean water, and education programs.",
    website: "https://www.unicef.org",
    focus: "Children's Aid",
    acceptsCrypto: true,
    logo: "https://logo.clearbit.com/unicef.org",
    raised: 8650,
  },
  {
    name: "International Rescue Committee",
    shortName: "IRC",
    description:
      "Responds to humanitarian crises worldwide, helping people survive conflict and rebuild their lives with healthcare, education, and economic support.",
    website: "https://www.rescue.org",
    focus: "Crisis Response",
    acceptsCrypto: false,
    logo: "https://logo.clearbit.com/rescue.org",
    raised: 7300,
  },
  {
    name: "Direct Relief",
    shortName: "Direct Relief",
    description:
      "Provides medical supplies and equipment to healthcare facilities in conflict and disaster zones, ensuring frontline responders have what they need.",
    website: "https://www.directrelief.org",
    focus: "Medical Supplies",
    acceptsCrypto: true,
    logo: "https://logo.clearbit.com/directrelief.org",
    raised: 6900,
  },
  {
    name: "Save the Children",
    shortName: "Save the Children",
    description:
      "Delivers critical aid to children in war zones including food, shelter, healthcare, and psychological support for trauma recovery.",
    website: "https://www.savethechildren.org",
    focus: "Children's Aid",
    acceptsCrypto: false,
    logo: "https://logo.clearbit.com/savethechildren.org",
    raised: 5400,
  },
  {
    name: "MedGlobal",
    shortName: "MedGlobal",
    description:
      "Provides medical expertise and healthcare to communities affected by conflict in the Middle East and beyond, training local health workers.",
    website: "https://medglobal.org",
    focus: "Healthcare",
    acceptsCrypto: false,
    logo: "https://logo.clearbit.com/medglobal.org",
    raised: 3200,
  },
];
