import PropTypes from "prop-types";
import orgAdminIcon from "../../assets/icons/org-admin.svg";
import depAdminIcon from "../../assets/icons/dep-admin.svg";
import memberIcon from "../../assets/icons/member.svg";

const PermissionCard = ({ type }) => {
  return (
    <>
      {type === "admin" && (
        <div className="p-1 border rounded-3xl flex items-center justify-center gap-2 bg-[#E3ECFF] border-[#BFD3FF]">
          <img src={orgAdminIcon} alt="" width={12} height={12} />
          <span className="text-xs text-primary-black">Organization Admin</span>
        </div>
      )}
      {type === "dep-admin" && (
        <div className="p-1 border rounded-3xl flex items-center justify-center gap-2 bg-[#FBF7FF] border-[#ECD9FF]">
          <img src={depAdminIcon} alt="" width={12} height={12} />
          <span className="text-xs text-primary-black">Department Admin</span>
        </div>
      )}
      {type === "member" && (
        <div className="p-1 border rounded-3xl flex items-center justify-center gap-2 bg-white border-[##D8DDE8]">
          <img src={memberIcon} alt="" width={12} height={12} />
          <span className="text-xs text-primary-black">Member</span>
        </div>
      )}
    </>
  );
};

PermissionCard.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PermissionCard;
