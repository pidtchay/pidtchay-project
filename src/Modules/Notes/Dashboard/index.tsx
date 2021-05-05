import { ErrorPage } from 'Components/ErrorPage/ErrorPage';
import { Header } from 'Components/Header/Header';
import { MarkdownField } from 'Components/MarkdownField/MarkdownField';
import React from 'react';
import Loader from 'react-loader-spinner';
import { useRecoilValueLoadable } from 'recoil';
import { TopTenLatestNotesSelector } from '../Store/selectors/TopTenLatestNotesSelector';
import { TopTenNotesSelector } from '../Store/selectors/TopTenNotesSelector';

export const Dashboard = (): JSX.Element => {
    const top10Notes = useRecoilValueLoadable(TopTenNotesSelector);
    const top10LatestNotes = useRecoilValueLoadable(TopTenLatestNotesSelector);
    return (
        <>
            <Header title="Home page" subtitle="Left: Top 10 Notes. Right: Top 10 Latest Notes" />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    {top10Notes.state === 'loading' && <Loader type="TailSpin" color="#00BFFF" />}
                    {top10Notes.state === 'hasError' && <ErrorPage />}
                    {top10Notes.state === 'hasValue' &&
                        top10Notes.contents.map((it) => (
                            <li key={it.id}>
                                <MarkdownField source={it.text} />
                            </li>
                        ))}
                </div>
                <div>
                    {top10LatestNotes.state === 'loading' && <Loader type="TailSpin" color="#00BFFF" />}
                    {top10LatestNotes.state === 'hasError' && <ErrorPage />}
                    {top10LatestNotes.state === 'hasValue' &&
                        top10LatestNotes.contents.map((it) => (
                            <li key={it.id}>
                                <MarkdownField source={it.text} />
                            </li>
                        ))}
                </div>
            </div>
        </>
    );
};
