import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{ lat: 40.854885, lng: -88.081807 }}
        />
      );
    }
  }
 export default GoogleApiWrapper({
    apiKey: 'TU_CLAVE_DE_API_DE_GOOGLE_MAPS'
  })(MapContainer);
    