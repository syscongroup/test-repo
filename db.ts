type UserDetailsType = {
  name: string;
  phone: string;
  email?: string;
  age: number;
  dob: string;
  reports: ReportType[];
};

type ReportType = {
  reportOn: string;
  testName: string;
  subtestName?: string[];
  tests: {
    test: string;
    value: string | number;
    normalValue: string | number;
  }[];
};

export const reportData: UserDetailsType[] = [
  {
    name: "John Doe",
    phone: "+916363483718",
    email: "test@test.test",
    age: 25,
    dob: "19-12-1980",
    reports: [
      {
        reportOn: "17-07-2024",
        testName: "Blood Sugar(FBS)",
        tests: [
          {
            test: "haemoglobin",
            value: 12,
            normalValue: 14,
          },
        ],
      },
      {
        reportOn: "25-04-2024",
        testName: "Thyroid(TSH)",
        tests: [
          {
            test: "haemoglobin",
            value: 12,
            normalValue: 14,
          },
        ],
      },
      {
        reportOn: "03-02-2024",
        testName: "Lipid Profile",
        tests: [
          {
            test: "haemoglobin",
            value: 12,
            normalValue: 14,
          },
        ],
      },
      {
        reportOn: "06-12-2023",
        testName: "CBC",
        tests: [
          {
            test: "haemoglobin",
            value: 12,
            normalValue: 14,
          },
        ],
      },
    ],
  },
];
