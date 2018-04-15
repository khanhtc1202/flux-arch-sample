import * as React from 'react';

type Props = {
    type: (text: string) => void;
    search: () => void;
}

export default class SearchBox extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    onClick(e: any) {
        if (e.keyCode === 13) {
            this.props.search();
        }
        else {
            this.props.type(e.target.value);
        }
    }

    render() {
        return (
            <div>
                <input type="text" onKeyUp={this.onClick.bind(this)} />
            </div>
        );
    }
}
