declare module "*.hbs";
// also have tried:
declare module "*.hbs" {
  const value: string;
  export default value;
}
