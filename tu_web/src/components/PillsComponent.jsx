import '../styles/Pills.css';

export const PillsComponent =()=> {
    return (
        <div className="px-2 py-3" role="group" aria-label="Vertical radio toggle button group">
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked/>
            <label className="btn btn-outline-dark rounded-4 mx-2" htmlFor="vbtn-radio1">Mostrar todos</label>
            <input type="radio" className="btn-check " name="vbtn-radio" id="vbtn-radio2" autocomplete="off"/>
            <label className="btn btn-outline-dark rounded-4 mx-2" htmlFor="vbtn-radio2">Casas</label>
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off"/>
            <label className="btn btn-outline-dark rounded-4 mx-2" htmlFor="vbtn-radio3">Apartamentos</label>
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio4" autocomplete="off"/>
            <label className="btn btn-outline-dark rounded-4 mx-2" htmlFor="vbtn-radio4">Locales</label>
        </div>
    );
}