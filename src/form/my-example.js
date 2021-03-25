const formData = "";

const cascade = {
  blank: {
    type: "string",
    enum: ["Other"],
    enumNames: ["Other"],
  },
  country: {
    type: "string",
    enum: ["DE", "IT", "JP", "US", "Other"],
    enumNames: ["Deutch", "Italia", "Japan", "United State", "Other"],
  },
  US: {
    type: "string",
    enum: ["AZ", "CA", "NY"],
    enumNames: ["Arizona", "California", "New York"],
  },
};

export const schema = {
  type: "object",
  description: "This is Example Form",
  definitions: cascade,
  properties: {
    questionGroup1: {
      title: "Question Group 1",
      description: "We can have Form Descripition here",
      type: "object",
      properties: {
        name: {
          type: "string",
          title: "1. Please enter your name",
          default: "A new task",
        },
        Gender: {
          title: "2. Gender",
          type: "boolean",
        },
        birthDate: {
          type: "string",
          title: "3. Please enter your birth date",
          format: "date",
        },
        address: {
          title: "",
          type: "object",
          properties: {
            country: {
              type: "string",
              title: "4.1 Country",
              $ref: "#/definitions/country",
            },
          },
          dependencies: {
            country: {
              properties: {
                state: {
                  type: "string",
                  title: "4.2 State",
                  $ref: cascade?.[formData?.questionGroup1?.address?.country]
                    ? `#/definitions/${formData.questionGroup1.address.country}`
                    : `#/definitions/blank`,
                },
              },
              required: ["state"],
            },
          },
        },
        tags: {
          type: "string",
          title: "5. Interested in",
          examples: ["Comic Books", "Computer", "Science"],
        },
      },
      required: ["name"],
    },
  },
};

const uiSchema = {
  questionGroup1: {
    classNames: "custom-class-name",
    birthDate: { "ui:widget": "date", classNames: "test" },
    address: { "ui:widget": "custom" },
    tags: {
      "ui:help": "Please Type",
    },
  },
};

export default uiSchema;
