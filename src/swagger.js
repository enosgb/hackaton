const  swaggerAutogen = require("swagger-autogen")();

const url = "localhost:3000";

const doc = {
  info: {
    title: "eHealth API",
    description: "API eHealth",
  },
  host: url,
  schemes: ["http", "https"],
};

const outputFile = "./dist/swagger_output.json";
const endpointsFiles = [
  "./src/Routes/userRoutes.ts",
  "./src/Routes/symptomRoutes.ts",
  "./src/Routes/appointmentRoutes.ts",
];

swaggerAutogen(outputFile, endpointsFiles, doc);
