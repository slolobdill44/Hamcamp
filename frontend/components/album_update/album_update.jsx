import React from 'react';

//give form props from edit button

class AlbumCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAlbum: null
    };
  }

  componentWillMount() {
    this.props.fetchAlbum(this.props.params.albumId)
      .then(() => {
        this.setState({
          currentAlbum: this.props.currentAlbum,
        });
      });
  }
}

export default AlbumCreateForm;
