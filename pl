<script>
  if(file.size > 2 * 1024 * 1024){
    alert('Maksimal 2MB');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(ev){
    const base64 = ev.target.result;

    if(isAdmin){
      adminInfo.photo = base64;
    } else {
      userAccount.photo = base64;
    }

    save();
    renderAccountPage();
    updateUserPill();
    toast('Foto berhasil diubah');
  };
  reader.readAsDataURL(file);
}

/* ===== PATCH ACCOUNT PAGE ===== */
const oldRenderAccountPage = renderAccountPage;
renderAccountPage = function(){
  oldRenderAccountPage();

  const n = isAdmin ? adminInfo.name : (isUserLoggedIn ? userAccount.name : 'Tamu');
  const photo = isAdmin ? adminInfo.photo : userAccount.photo;

  if(photo){
    document.getElementById('acct-av-big').innerHTML =
      `<img src="${photo}" style="width:100%;height:100%;border-radius:20px;object-fit:cover;">`;
  } else {
    document.getElementById('acct-av-big').textContent = initials(n);
  }
}
</script>

<!-- TAMBAHAN DI HTML ACCOUNT -->

<!-- GANTI div acct-av-big JADI INI -->
<!--
<div class="acct-av-big" id="acct-av-big" onclick="triggerPhotoUpload()">
  👤
  <input type="file" id="photo-input" accept="image/*" style="display:none" onchange="uploadProfilePhoto(event)">
</div>
-->

<!-- OPTIONAL LOGIN USER BUTTON -->
<!--
<button onclick="userLogin('User Demo','user@gmail.com')" class="btn btn-ghost">
Login User
</button>
-->

</body>
</html>
