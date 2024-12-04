npx openapi-generator-cli generate -i petstore.yaml -g typescript -o generated-source/typescript
npx typedoc --out ts-docs generated-source/typescript/index.ts
npx typedoc --out ts-docs --plugin typedoc-plugin-markdown generated-source/typescript/index.ts

