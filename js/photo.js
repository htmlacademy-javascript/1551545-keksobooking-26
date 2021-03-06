const FILE_TYPES = ['png', 'jpeg', 'jpg', 'gif'];
const AVATAR_SUBSTRATE = 'img/muffin-grey.svg';

const adAvatarPreview = document.querySelector('.ad-form-header__preview img');
const adAvatarUpload = document.querySelector('.ad-form__field input[type=file]');

const adHousePreview = document.querySelector('.ad-form__photo');
const adHouseUpload = document.querySelector('.ad-form__upload input[type=file]');

adAvatarUpload.addEventListener('change', () => {
  const file = adAvatarUpload.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    adAvatarPreview.src = URL.createObjectURL(file);
  }
});

adHouseUpload.addEventListener('change', () => {
  const file = adHouseUpload.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const innerPicture = document.createElement('img');
    adHousePreview.appendChild(innerPicture);
    innerPicture.src = URL.createObjectURL(file);
    innerPicture.width = 70;
  }
});

const photoReset = () => {
  adAvatarPreview.src = AVATAR_SUBSTRATE;
  const housePhotoList = Array.from(adHousePreview.children);
  housePhotoList.forEach((photo) => {
    photo.remove();
  });
};

export {photoReset};
