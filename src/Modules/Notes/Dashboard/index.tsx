import { ErrorPage } from 'Common/Components/ErrorPage/ErrorPage';
import { Header } from 'Common/Components/Header/Header';
import { MarkdownField } from 'Components/MarkdownField/MarkdownField';
import { isError, isLoading, isSuccess } from 'Core/Utils/Utils';
import React from 'react';
import Loader from 'react-loader-spinner';
import { useRecoilValueLoadable } from 'recoil';
import { INoteData } from '../Models';
import { TopTenLatestNotesSelector } from '../Store/selectors/TopTenLatestNotesSelector';
import { TopTenNotesSelector } from '../Store/selectors/TopTenNotesSelector';

export const Dashboard = (): JSX.Element => {
    const top10Notes = useRecoilValueLoadable(TopTenNotesSelector);
    const top10LatestNotes = useRecoilValueLoadable(TopTenLatestNotesSelector);
    return (
        <>
            <Header title="Home page" subtitle="Left: Top 10 Notes. Right: Top 10 Latest Notes" />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ listStyle: 'none' }}>
                    {isLoading(top10Notes) && <Loader type="TailSpin" color="#00BFFF" />}
                    {isError(top10Notes) && <ErrorPage />}
                    {isSuccess(top10Notes) &&
                        (top10Notes.contents as INoteData[]).map((it) => (
                            <li key={it.id}>
                                <MarkdownField source={it.text} />
                            </li>
                        ))}
                </div>
                <div style={{ listStyle: 'none' }}>
                    {isLoading(top10LatestNotes) && <Loader type="TailSpin" color="#00BFFF" />}
                    {isError(top10LatestNotes) && <ErrorPage />}
                    {isSuccess(top10LatestNotes) &&
                        (top10LatestNotes.contents as INoteData[]).map((it) => (
                            <li key={it.id}>
                                <MarkdownField source={it.text} />
                            </li>
                        ))}
                </div>
            </div>
        </>
    );
};
