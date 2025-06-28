import app from "./app";
import env from "./config/env";


const PORT = env.PORT || 3000;

app.listen(PORT, () => console.log(`El servidor se está iniciando en el puerto: ${PORT}`));