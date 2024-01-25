gptool({
    title: "City general information",
    description: "Generate a JSON response with city size information.",
    system: ["system", "system.files", "system.schema"],
    temperature: 0
})

defSchema("CITY_SCHEMA", {
    type: "array",
    description: "A list of cities with population and elevation information.",
    items: {
        type: "object",
        description: "A city with population and elevation information.",
        properties: {
            name: { type: "string", description: "The name of the city." },
            population: { type: "number", description: "The population of the city." },
            elevation: { type: "number", description: "The elevation of the city." },
            url: { type: "string", description: "The URL of the city's Wikipedia page." }
        },
        required: ["name", "population", "elevation", "url"]
    }
})

def("CITIES", env.files)

$`Generate a YAML data file with the following information for each city in CITIES.

- The city's population.
- The city's elevation.

If the city is unknown, omit it from the response. Explain the source of your data.
Validate the output the generated YAML using the CITY_SCHEMA JSON schema.
`
