import { useContext } from 'react';
import { PermissionContext } from '../context/PermissionProvider';
function usePermission() {
	return useContext(PermissionContext);
}

export default usePermission;
