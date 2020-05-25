import * as React from 'react';
import { connect } from "react-redux";
import { thunkFetchRepositoryData } from "Store/repository/thunks";
import { RootState } from 'Store';
import { TableComponent } from 'Component/TableComponent';
import { IRepositoryData } from 'Model/RepositoryData';
import { convertRepositoryDataToSchema, convertRepositoryDataToColumns } from 'Utils/TableUtils';
import { Input } from 'antd';

const { Search } = Input;

interface IState {
    orgname: string;
}

interface IProps {
    fetchRepositories: (orgName: string) => void;
    repositoryData?: IRepositoryData[];
}

/**
 * Home page component.
 */
class HomPageComponent extends React.Component<IProps, IState> {
    state: IState = {
        orgname: 'facebook',
    }

    componentDidMount() {
        this.props.fetchRepositories(this.state.orgname);
    }

    handleFetchRepositories = (value) => {
        this.setState({orgname: value}, () => this.props.fetchRepositories(this.state.orgname));
    }

    render() {
        const {repositoryData} = this.props;
        const columns = convertRepositoryDataToColumns(convertRepositoryDataToSchema(repositoryData[0]));
        return (
            <div>
                <div>
                    <Search  placeholder="input search org. name" enterButton="Search" size="large" onSearch={this.handleFetchRepositories} />
                </div>
                <TableComponent columns={columns} dataSource={repositoryData || []} />
            </div>
        );
    }
}


const mapStateToProps = (state: RootState) => {
    return {
        repositoryData: state.repository,
    };
}

const mapPropsToDispatch = {
    fetchRepositories: (orgName: string) => thunkFetchRepositoryData(orgName)
}

export const HomPage = connect(mapStateToProps, mapPropsToDispatch)(HomPageComponent);