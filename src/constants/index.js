export const industries = [
  {
    label: "Software Industry",
    value: "software_industry",
  },
  {
    label: "Fashion Industry",
    value: "fashion_industry",
  },
  {
    label: "Pharmaceutical Industry",
    value: "pharmaceutical_industry",
  },
  {
    label: "Energy Industry",
    value: "energy_industry",
  },
];
export const companySizes = [
  {
    label: "1 - 10",
    value: "1_10",
  },
  {
    label: "10 - 50",
    value: "10_50",
  },
  {
    label: "50 - 100",
    value: "50_100",
  },
  {
    label: "100 - 250",
    value: "100_250",
  },
  {
    label: "250 - 500",
    value: "250_500",
  },
  {
    label: "500 - 1000",
    value: "500_1000",
  },
  {
    label: "Over 1000",
    value: "over_1000",
  },
];

export const departments = [
  {
    label: "Department",
    value: "department",
  },
];

export const emissionRegion = [
  { label: "Sweden", value: "SWE" },
  { label: "United Kingdom", value: "GB" },
  { label: "France", value: "FRA" },
  { label: "Denmark", value: "DK" },
  { label: "United States", value: "US" },
  { label: "Canada", value: "CAN" },
];

export const emissionSource = [
  { label: "Water", value: "water" },
  { label: "Waste", value: "waste" },
  { label: "Energy", value: "energy" },
  { label: "Transportation", value: "transport" },
  { label: "Food", value: "food" },
  { label: "Equipment", value: "equipment" },
  { label: "Accomodation", value: "accomodation" },
];

export const emissionFactorss = {
  water: [
    // {
    //   label: "Water treatment",
    //   value: "water",
    // },
    {
      label: "Water supply",
      value: "water_supply",
    },
  ],
  waste: [
    {
      label: "Waste from mixed plastic",
      value: "waste_from_recycled_mixed_plastic",
    },
  ],
  energy: [
    {
      label: "Electricity from grid",
      value: "electricity_from_grid",
    },
    {
      label: "Fuel On site",
      value: "fuel",
    },
    {
      label: "Heat and steam",
      value: "heat_and_steam",
    },
  ],
  transportation: [
    {
      label: "Air travel",
      value: "air_travel",
    },
    {
      label: "Road travel",
      value: "road_travel",
    },
  ],
  equipment: [
    {
      label: "Office machinery and computers",
      value: "office_machinery_and_computers",
    },
    {
      label: "Office equipment rental",
      value: "office_equipment_rental",
    },
  ],
  accomodation: [
    {
      label: "Hotel Stay",
      value: "hotel_stay",
    },
    {
      label: "Hotel and restaurant services",
      value: "hotel_and_restaurant_services",
    },
  ],
};

export const emissionUnit = [
  {
    label: "USD",
    value: "usd",
  },
  {
    label: "kWh",
    value: "kWh",
  },
  {
    label: "t",
    value: "t",
  },
  {
    label: "km",
    value: "km",
  },
  {
    label: "l",
    value: "l",
  },
];

export const countries = {
  fuel: [{ label: "Canada", value: "CAN" }],
  heat_and_steam: [
    { label: "Denmark", value: "DK" },
    { label: "United Kingdom", value: "GB" },
    { label: "France", value: "FRA" },
  ],
  electricity_from_grid: [
    { label: "Canada", value: "CAN" },
    { label: "United States", value: "US" },
    { label: "United Kingdom", value: "GB" },
  ],
  road_travel: [{ label: "United Kingdom", value: "GB" }],
  air_travel: [{ label: "United Kingdom", value: "GB" }],
  water_supply: [{ label: "United Kingdom", value: "GB" }],
  waste_from_recycled_mixed_plastic: [{ label: "United States", value: "US" }],
  hotel_stay: [
    { label: "Canada", value: "CAN" },
    { label: "United Kingdom", value: "GB" },
    { label: "United States", value: "US" },
  ],
  hotel_and_restaurant_services: [
    { label: "Canada", value: "CAN" },
    { label: "United Kingdom", value: "GB" },
    { label: "France", value: "FRA" },
    { label: "United States", value: "US" },
  ],
  office_machinery_and_computers: [
    { label: "Canada", value: "CAN" },
    { label: "Denmark", value: "DK" },
    { label: "France", value: "FRA" },
    { label: "United Kingdom", value: "GB" },
    { label: "United States", value: "US" },
  ],
  office_equipment_rental: [
    { label: "Denmark", value: "DK" },
    { label: "France", value: "FRA" },
    { label: "United Kingdom", value: "GB" },
    { label: "Canada", value: "CAN" },
    { label: "United States", value: "US" },
  ],
};

export const acceptedOrgFileTypes = ["png", "jpg", "jpeg", "pdf"];
