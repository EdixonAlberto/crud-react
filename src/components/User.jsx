import React from 'react'

export default (props) => {
    return props.users.map(user => {
        return (
            <div className="col-md-4" key={user.id}>
                <div className="card mb-4">

                    {/* HEADER */}
                    <div className="card-header text-white bg-success">
                        <h6>{`${user.name} ${user.lastname}`}</h6>
                    </div>

                    {/* BODY */}
                    <div className="card-body">
                        <span className="d-block"><b>Edad:</b> {user.age}</span>
                        <span className="d-block"><b>Sexo:</b> {user.sex}</span>
                        <span className="d-block"><b>Correo:</b> {user.email}</span>
                        <span className="d-block"><b>Telefono:</b> {user.phone}</span>
                        <span className="d-block"><b>País:</b> {user.country}</span>
                    </div>

                    {/* FOOTER */}
                    <div className="card-footer">
                        {/* <button
                            className="btn btn-outline-info mr-2"
                            onClick={() => props.update(user.id)}>
                            <span>Editar</span>
                        </button> */}

                        <button
                            className="btn btn-outline-danger"
                            onClick={() => props.destroy(user.id)}>
                            Eliminar
                        </button>
                    </div>

                </div>
            </div>
        );
    });
}