import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer';

const Side = ({ className, children, ...props }) => (
    <Drawer className={className}>
      {children}
    </Drawer>
  );


export const Side = styled.div`




`

