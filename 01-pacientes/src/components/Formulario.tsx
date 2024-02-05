const Formulario = () => {
  return (
    <div className="md:w-1/2">
      
      <h3 className="font-black text-3xl text-center">Seguimiento de pacientes</h3>

      <p className="font-bold text-center mt-5">
        Agregar pacientes y <span className="text-indigo-500">administralos</span>
      </p>

      <form className="bg-white p-5 py-10 rounded-lg shadow-2xl border mt-5">

        <div>
          <label htmlFor="nombre" className="flex flex-col text-gray font-bold">
            Nombre de la mascota
          </label>
          <input 
            type="text" 
            id="nombre"
            placeholder="Nombre de la mascota"
            className="border-2 p-1 w-full mt-2 rounded placeholder-gray-400"
          />
        </div>
        
        <div className="mt-3">
          <label htmlFor="propietario" className="flex flex-col text-gray font-bold">
            Propietario
          </label>
          <input 
            type="text" 
            id="propietario"
            placeholder="Mario..."
            className="border-2 p-1 w-full mt-2 rounded placeholder-gray-400"
          />
        </div>
        
        <div className="mt-3">
          <label htmlFor="email" className="flex flex-col text-gray font-bold">
            Correo Electronico
          </label>
          <input 
            type="email" 
            id="email"
            placeholder="example@gmail.com"
            className="border-2 p-1 w-full mt-2 rounded placeholder-gray-400"
          />
        </div>
        
        <div className="mt-3">
          <label htmlFor="alta" className="flex flex-col text-gray font-bold">
            Alta
          </label>
          <input 
            type="date" 
            id="alta"
            className="border-2 p-1 w-full mt-2 rounded placeholder-gray-400"
          />
        </div>
        
        <div className="mt-3">
          <label htmlFor="sintomas" className="flex flex-col text-gray font-bold">
            Sintomas
          </label>
          <textarea 
            id="sintomas"
            placeholder="Describe los sintomas..."
            className="border-2 p-1 w-full mt-2 rounded placeholder-gray-400"
          />
        </div>

        <div className="mt-3">
          <button
            className="bg-indigo-600 p-3 text-white rounded-lg font-bold w-full uppercase"
            type="submit"
          >
            Agregar Paciente
          </button>
        </div>

      </form>


    </div>
  )
}

export default Formulario