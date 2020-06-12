import * as React from 'react';
import { connect } from 'react-redux';
import { thunkFetchRepositoryData } from 'Store/repository/thunks';
import { RootState } from 'Store';
import { IRepositoryData } from 'Model/RepositoryData';
import { convertRepositoryDataToSchema, convertRepositoryDataToColumns } from 'Utils/TableUtils';
import { RepositoriesBody } from './RepositoriesBody';

interface IState {
  orgname: string;
}

interface IProps {
  fetchRepositories: (orgName: string) => void;
  repositoryData?: IRepositoryData[];
}

/**
 * Repositories page component.
 */
class RepositoriesPageComponent extends React.Component<IProps, IState> {
  state: IState = {
    orgname: 'facebook'
  };

  componentDidMount () {
    this.props.fetchRepositories(this.state.orgname);
  }

  handleFetchRepositories = (value) => {
    this.setState({ orgname: value }, () => this.props.fetchRepositories(this.state.orgname));
  }

  render () {
    const { repositoryData } = this.props;
    const columns = convertRepositoryDataToColumns(convertRepositoryDataToSchema(repositoryData[0]));
    return (
      <>
         <RepositoriesBody columns={columns} data={repositoryData} onFetchRepositories={this.handleFetchRepositories}/>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    repositoryData: state.repository
  };
};

const mapPropsToDispatch = {
  fetchRepositories: (orgName: string) => thunkFetchRepositoryData(orgName)
};

export const RepositoriesPage = connect(mapStateToProps, mapPropsToDispatch)(RepositoriesPageComponent);
