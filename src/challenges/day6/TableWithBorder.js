export const TableWithBorder = ({children}) => <table style={{
  borderSize: '3px',
  borderStyle: 'solid',
  borderColor: 'green',
  borderSpacing: '15px',
}}>
  {children}
</table>