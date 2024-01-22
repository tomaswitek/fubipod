module.exports = function (env) {
  return {
    // Reference: https://docs.railway.app/plugins/postgresql
    // railway DB PG variables
    // DB_CLIENT: "pg",
    // DB_HOST: env.PGHOST,
    // DB_PORT: env.PGPORT,
    // DB_DATABASE: env.PGDATABASE,
    // DB_USER: env.PGUSER,
    // DB_PASSWORD: env.PGPASSWORD,
    // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
    PUBLIC_URL: `https://${env.RAILWAY_STATIC_URL}`,
    // merge with rest of env variables
    ...env,
  };
};
