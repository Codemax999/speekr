// @flow
// --- Colors ---
export const colorPrimary = '#2699A6'
export const colorSecondary = '#2A5BA4'

// --- Shared Components 
export const pageHeader = `
  padding: 0;
  position: fixed;
  width: 100%;
  background: #f8f8f8;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  line-height: 64px;
  z-index: 2;
  & section {
    margin: 0 20px;
  }
  & .chatHeader {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    & > div {
      color: ${colorSecondary};
      font-weight: 500;
      letter-spacing: 0.3px;
    }
  }
`
// Input
export const authIcon = `color: rgba(0, 0, 0, .25);`

// Auth Button
export const authBtn = `
  width: 100%;
  background: ${colorPrimary};
  border: 0;
  box-shadow: 0 1px 6px rgba(0,0,0,0.2);
  height: 40px;
  letter-spacing: 0.6px;
  margin: 30px 0;
`