import * as React from 'react';

export type Result = {
    id: number,
    title: string,
}

type Props = {
    results: Array<Result>;
}

export default class SearchResults extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {
            results
        } = this.props;

        return (
            <div>
                <aside>
                    <h2>Search results</h2>
                    <ul>
                        {
                            results.map(f => <li key={f.id.toString()}>{f.title}</li>)
                        }
                    </ul>
                </aside>
            </div>
        );
    }
}
