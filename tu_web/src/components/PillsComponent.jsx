import '../styles/Pills.css';

export const PillsComponent =()=> {
    return (
        <div className="py-3 overflow-auto w-100 d-flex flex-nowrap raleway pillscomponent" role="group" aria-label="Vertical radio toggle button group">
            <input type="radio" className="btn-check d-none" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" defaultChecked/>
            <label className="btn btn-outline-dark rounded-5 mx-2" htmlFor="vbtn-radio1" style={{minWidth:'11rem', fontSize:15}}>MOSTRAR TODOS</label>
            <input type="radio" className="btn-check d-none" name="vbtn-radio" id="vbtn-radio2" autocomplete="off"/>
            <label className="btn btn-outline-dark rounded-5 mx-2" htmlFor="vbtn-radio2"  style={{minWidth:'6rem', fontSize:15}}>CASAS</label>
            <input type="radio" className="btn-check d-none" name="vbtn-radio" id="vbtn-radio3" autocomplete="off"/>
            <label className="btn btn-outline-dark rounded-5 mx-2" htmlFor="vbtn-radio3"  style={{minWidth:'10rem', fontSize:15}}>APARTAMENTOS</label>
            <input type="radio" className="btn-check d-none" name="vbtn-radio" id="vbtn-radio4" autocomplete="off"/>
            <label className="btn btn-outline-dark rounded-5 mx-2" htmlFor="vbtn-radio4"  style={{minWidth:'7rem', fontSize:15}}>LOCALES</label>
        </div>
    );
}