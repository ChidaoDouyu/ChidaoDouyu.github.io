---
article: true
title: Memtest86 Setting Tutorial
---

This article provides the setting method of Memtest86.
<!-- more -->

1. Download Memtest
First，You need to downlaod the newest version from the Memtest official website. You can choose ISO mirror file or USB installing program.

2. Create Starting Disk
If using the ISO mirror, you can burn it to disc. If using the USB installing program, you can write it to a USB flash drive.

3. Run Memtest
Plug the disc or USB flash drive into the computer.
Reboot the computer, and go into the BIOS (usually press F2, F12, DEL, or ESC).
Set to boot from the disc or USB flash drive in BIOS.
Confirm and quit the BIOS, PC will boot from disc and USB flash drive and run Memtest automatically.

4. Testing
After boot from Memtest, it will test the memory automatically. You can view the progress and error infomation. At least a full cycle is suggested (usually a few hours) to ensure the stability of the memory.

5. Check the outcome
After completed，Memtest will print the result. If there's no error, the memory is normal. If there's any error, you need to replace the memory module or check for hardware issues further.

[Back to CheckNewPC](checknew.md#running-the-program)