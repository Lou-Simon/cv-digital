import React from 'react'

export default function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4 text-white">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Lou SIMON</h5>
                    <p>Etudiant en licence d'informatique</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-6 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Contactez-moi</h5>
                    <a href="mailto:lou.simon.2287@gmail.com" target='_blank' className='text-white'>lou.simon.2287@gmail.com</a>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">
            © 2024 Copyright - Lou SIMON
        </div>
    </footer>
  )
}
