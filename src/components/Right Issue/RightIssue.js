import React from 'react'
import './RightIssue.css';
import RightIssueContent from './RightIssueContent';
import Banner from '../common_components/banner/banner';


const RightIssue = () => {
  return (
    <>
    <Banner banner_title={'Investors'}/>
        <RightIssueContent/>
    </>
  )
}

export default RightIssue;