Check out [Handy Zabbix](https://play.google.com/store/apps/details?id=br.dev.kuhn.handyzabbix) on Google Play
<br/>
Check out the [app documentation](https://hz.kuhn.dev.br/docs_fundamentals_gettingstarted) or the [home page](https://hz.kuhn.dev.br/)

<h1 align="center">HandyZabbix</h1>

<p align="center">Mobile app for <a href="https://zabbix.com">Zabbix</a></p>
<p align="center">Zabbix is an open-source monitoring software tool for diverse IT components, including networks, servers, virtual machines and cloud services. Zabbix provides monitoring metrics, among others network utilization, CPU load and disk space consumption.</p>

<h1 align="center">App features</h1>

- [x] Android
- [ ] iOS
- [x] Multiple sites
- [x] View latest problems (description, hostname, occurrence date, acknowledges)
- [x] Receive push notifications for new problems
- [x] View hosts basic details
- [x] Search for hosts current problems and history
- [x] View hosts graphs
- [ ] View hosts latest data
- [ ] View hosts inventory

<h1 align="center">Known issues</h1>
<p>1. Data fetch is synchronous, so if one site takes too long all process is impacted</p>
<p>2. Stacked graphs are not supṕorted yet</p>

<h1 align="center">Required Zabbix API permissions</h1>
You can find the full explanation [here](https://hz.kuhn.dev.br/docs_fundamentals_permissions)
<br/><br/>
<p>For retrieving problems: problem.get, event.get</p>
<p>For retrieving site settings (timezone, severities color): settings.get</p>
<p>For retrieving hosts: host.get</p>
<p>For visualizing graphs: graph.get, graphitem.get, item.get, trend.get, history.get, settings.get</p>

<h1 align="center">🛠 Tech stacks, libs and tools used</h1>

- [PhilJay/MPAndroidChart](https://github.com/PhilJay/MPAndroidChart) for graphs
- [i18next](https://www.i18next.com/) for internationalization
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [Moment](https://momentjs.com/) for dates and times

<h1 align="center">Screenshots</h1>
<p>Landing screens</p>
<p float="left">
<img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/welcome.png" 
data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/welcome.png" width="200" height="400" />
<img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/theme.png" 
data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/theme.png" width="200" height="400" />
<img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/no_sites.png" 
data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/no_sites.png" width="200" height="400" />
</p>

<p>Site managment screens</p>
<p float="left">
<img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/choose_login.png" 
data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/choose_login.png" width="200" height="400" />
  <img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/set_name.png" 
data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/set_name.png" width="200" height="400" />
    <img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/set_address.png" 
data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/set_address.png" width="200" height="400" />
      <img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/set_login.png" 
data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/set_login.png" width="200" height="400" />
</p>

<p>Preferences screen</p>
<p float="left">
<img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/preferences_battery_notoptimized.png" 
data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/preferences_battery_notoptimized.png" width="200" height="400" />
</p>

<p>Main screen tabs</p>
<p float="left">
<img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/dashboard.png" 
data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/dashboard.png" width="200" height="400" />
  <img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/problems.png" 
data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/problems.png" width="200" height="400" />
    <img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/hosts.png" 
data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/hosts.png" width="200" height="400" />
</p>

<p>Host detailed screen</p>
<p float="left">
<img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/host_detailed.png" data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/host_detailed.png" width="200" height="400" />
  <img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/problem_history.png" data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/problem_history.png" width="200" height="400" />
    <img src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/graphs.png" data-canonical-src="https://github.com/jackanakin/handy-zabbix/blob/main/src/app/assets/imgs/docs/app_screens/graphs.png" width="200" height="400" />
</p>
