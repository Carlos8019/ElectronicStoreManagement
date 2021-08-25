using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
namespace dataAccess.Models
{
    public class Users
    {
        [Key]
        public int idUser { get; set; }
        public string nameUser { get; set; }
        public string passwordUser { get; set; }
        public int idProfile { get; set; }
        public List<UserProfile> UserProfiles { get; set; }
        public Users()
        {

        }
        public Users(dynamic obj)
        {
            this.nameUser = obj.nameUser;
            this.passwordUser = obj.passwordUser;
            int.TryParse(obj.idProfile, out int tmpidProfile);
            this.idProfile = tmpidProfile;
        }
    }
}