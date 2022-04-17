
function Menu3() {
    return (
      <h1>
        
        <form>
          <label>
            Nombre:
            <input type="text" name="nombre" />
          </label>
        </form>
        <br></br>
        <form>
          <label>
            Correo:
            <input type="text" name="correo" />
          </label>
        </form>
        <br></br>
        <form>
          <label>
            Mensaje:
            <input type="text" name="Mensaje" />
          </label>
          <input type="submit" value="Enviar" />
        </form>

      </h1>
    );
  }
  
  export default Menu3;