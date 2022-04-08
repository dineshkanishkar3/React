import React from 'react';
import footerData from '../../fixtures/footer.json'
function Footer(){
    return ( 
        <footer>
            {
                footerData.map((data,ind)=>(
                    <div key={ind}>
                        {
                            data.map((item,i)=><span key={i}>{item}</span>)
                        }
                    </div>
                ))
            }
        </footer>
    )}

    export default Footer