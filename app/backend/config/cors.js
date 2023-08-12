const corsOptions = {
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin: process.env.FRONTEND_ADDRESS,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["set-cookie"],
  };

  export default corsOptions