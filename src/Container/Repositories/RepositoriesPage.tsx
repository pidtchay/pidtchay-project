import * as React from 'react';
import { connect } from 'react-redux';
import { thunkFetchRepositoryData } from 'Store/repository/thunks';
import { RootState } from 'Store';
import { IRepositoryData } from 'Model/RepositoryData';
import { convertRepositoryDataToSchema, convertRepositoryDataToColumns } from 'Utils/TableUtils';
import { RepositoriesBody } from './RepositoriesBody';
import { ILiterals } from 'Model/Literals';

interface IState {
  orgname: string;
}

interface IProps {
  fetchRepositories: (orgName: string, literals: ILiterals) => void;
  repositoryData?: IRepositoryData[];
  literals?: ILiterals;
}

/**
 * The component displays a page with a list of repositories in Github.
 * Which belong to the selected organization. Default search value: facebook.
 */
class RepositoriesPageComponent extends React.Component<IProps, IState> {
  state: IState = {
    orgname: 'facebook'
  };

  componentDidMount () {
    const {literals} = this.props;
    this.props.fetchRepositories(this.state.orgname, literals);
  }

  handleFetchRepositories = (value) => {
    this.setState({ orgname: value }, () => this.props.fetchRepositories(this.state.orgname, this.props.literals));
  }

  render () {
    const { repositoryData, literals } = this.props;
    const columns = convertRepositoryDataToColumns(convertRepositoryDataToSchema(repositoryData[0]));
    return (
      <>
         <RepositoriesBody literals={literals} columns={columns} data={repositoryData} onFetchRepositories={this.handleFetchRepositories}/>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    repositoryData: state.repository,
    literals: state.literals
  };
};

const mapPropsToDispatch = {
  fetchRepositories: (orgName: string, literals: ILiterals) => thunkFetchRepositoryData(orgName, literals)
};

export const RepositoriesPage = connect(mapStateToProps, mapPropsToDispatch)(RepositoriesPageComponent);
