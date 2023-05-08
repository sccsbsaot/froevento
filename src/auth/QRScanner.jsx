// import * as React from "react";
// "react-qrcode-scan": "^1.1.7",
// // import { QrReader } from 'react-qr-reader';
// import { QRScaner, Camera, CameraItem  } from "react-qrcode-scan";


// export default class QrScanner extends React.Component {
//     state = {
//         results: [],
//         camera: null
//     };
//     onError = (err) => alert(err.toString());
//     onScan = (content) => {
//         const results = this.state.results;
//         results.unshift({
//             date: Date.now(),
//             content
//         });
//         this.setState({
//             results
//         });
//     }
//     onStart = (camera) => {
//         this.setState({
//             camera
//         });
//     }
//     render() {
//         const { results, camera } = this.state;
//         return (
//             <Camera onError={this.onError}>
//                 { cameras => cameras.length > 0 ?
//                     <div >
//                         <div>
//                             <h2>Scan QR Code</h2>
//                             <QRScaner onStart={this.onStart} onScan={this.onScan} camera={cameras[0]} onError={this.onError} />
//                         </div>
//                         <aside>
//                             <section>
//                                 <h3>Camera:</h3>
//                                 <div>{camera ? camera.name : ""}</div>
//                             </section>
//                             <section>
//                                 <h3>Results:</h3>
//                                 <ul>
//                                     {results.map(result => <li key={result.date}>{result.content}</li>)}
//                                 </ul>
//                             </section>
//                         </aside>

//                     </div>
//                     : <div> No Camera</div>}
//             </Camera>
//         );
//     }
// }

// const QrScanner = ({data, setData, setIsLoggedIn}) => {

//   return (
//     <>
//       <QRScanner
//         delay={500}
//         onResult={(result, error) => {
//           if (!!result) {
//             setData(result?.text);
//           }

//           if (!!error) {
//             console.info(error);
//           }
//         }}
//         style={{ width: '100%' }}
//       />
//       <p>{data}</p>
//     </>
//   );
// };
// export default QrScanner;