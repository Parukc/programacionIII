try {
    const user = JSON.parse('{"name":"Luis, edad:25}');
    console.log("conversion exitosa")
    } catch {
        console.log("Hay un error conviriendo a json")
    }
    console.log("final del sistema");

    try {
        console.log("intentando abrir archivo");
        throw new Error("Archivo No encontrado")
    } catch (error) {
        console.log("Error : ", error.message);
    } finally {
        console.log("Termino el proceo de abrir archivo");
    }
